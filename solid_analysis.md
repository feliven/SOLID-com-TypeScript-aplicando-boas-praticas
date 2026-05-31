# SOLID Analysis — `src/exemplos/`

These five files are **coupling examples** (content, common, control, data, stamp). They demonstrate different *levels* of coupling, but they do **not** follow SOLID principles well. Below is the per-file and per-principle breakdown.

---

## Summary Table

| File | SRP | OCP | LSP | ISP | DIP |
|------|-----|-----|-----|-----|-----|
| [coupling-common.ts](file:///Users/feliven/Documents/APIs/SOLID%20com%20TypeScript%20-%20aplicando%20boas%20pr%C3%A1ticas%20em%20orienta%C3%A7%C3%A3o%20a%20objetos/src/exemplos/coupling-common.ts) | ✅ | ❌ | — | — | ❌ |
| [coupling-content.ts](file:///Users/feliven/Documents/APIs/SOLID%20com%20TypeScript%20-%20aplicando%20boas%20pr%C3%A1ticas%20em%20orienta%C3%A7%C3%A3o%20a%20objetos/src/exemplos/coupling-content.ts) | ✅ | ❌ | — | — | ❌ |
| [coupling-control.ts](file:///Users/feliven/Documents/APIs/SOLID%20com%20TypeScript%20-%20aplicando%20boas%20pr%C3%A1ticas%20em%20orienta%C3%A7%C3%A3o%20a%20objetos/src/exemplos/coupling-control.ts) | ⚠️ | ❌ | — | — | ❌ |
| [coupling-data.ts](file:///Users/feliven/Documents/APIs/SOLID%20com%20TypeScript%20-%20aplicando%20boas%20pr%C3%A1ticas%20em%20orienta%C3%A7%C3%A3o%20a%20objetos/src/exemplos/coupling-data.ts) | ✅ | ❌ | ⚠️ | — | ❌ |
| [coupling-stamp.ts](file:///Users/feliven/Documents/APIs/SOLID%20com%20TypeScript%20-%20aplicando%20boas%20pr%C3%A1ticas%20em%20orienta%C3%A7%C3%A3o%20a%20objetos/src/exemplos/coupling-stamp.ts) | ⚠️ | ❌ | ⚠️ | ⚠️ | ❌ |

> **Legend:** ✅ Follows — ⚠️ Partially / Questionable — ❌ Violates — (—) Not applicable at this scale

---

## Per-file Analysis

### 1. `coupling-common.ts` — Common Coupling

```typescript
class LogService { … }
class ServicoAutenticacao {
  constructor(private logService: LogService) {}
}
```

| Principle | Verdict | Notes |
|-----------|---------|-------|
| **S** — Single Responsibility | ✅ | Each class has one job (logging / authentication). |
| **O** — Open/Closed | ❌ | `ServicoAutenticacao` depends directly on the concrete `LogService`. To swap the logging strategy you must edit the class. |
| **L** — Liskov Substitution | — | No inheritance, so not directly applicable. |
| **I** — Interface Segregation | — | No interfaces exist. |
| **D** — Dependency Inversion | ❌ | High-level `ServicoAutenticacao` depends on the **concrete** `LogService` instead of an abstraction (e.g., `ILogService`). |

---

### 2. `coupling-content.ts` — Content Coupling

```typescript
class Calculadora { … }
class Logger {
  constructor(private resultado: number) {}
}
```

| Principle | Verdict | Notes |
|-----------|---------|-------|
| **S** | ✅ | Each class is focused. |
| **O** | ❌ | No extension points; changing the format of the log requires editing `Logger`. |
| **L** | — | No inheritance. |
| **I** | — | No interfaces. |
| **D** | ❌ | `Logger` receives a raw primitive from `Calculadora`, but the overall wiring is tightly coupled to concrete classes with no abstraction layer. |

---

### 3. `coupling-control.ts` — Control Coupling

```typescript
class ServiceProcessadorPagamento {
  processar(status: boolean): void { … }
}
class CarrinhoCompras {
  constructor(private servicePagamento: ServiceProcessadorPagamento) {}
  finalizarCompra(status: boolean): void { … }
}
```

| Principle | Verdict | Notes |
|-----------|---------|-------|
| **S** | ⚠️ | `ServiceProcessadorPagamento` both decides *and* logs the payment outcome via a boolean flag — this is textbook **control coupling**. The caller dictates internal behavior. |
| **O** | ❌ | Adding a new payment status (e.g., "pending") requires modifying the `if/else` inside `processar`. |
| **L** | — | No inheritance. |
| **I** | — | No interfaces. |
| **D** | ❌ | `CarrinhoCompras` depends on the concrete `ServiceProcessadorPagamento`. |

> [!WARNING]
> The `status: boolean` parameter is a classic **control coupling** smell — one module passes a flag that tells another module *what to do*. This directly undermines OCP.

---

### 4. `coupling-data.ts` — Data Coupling

```typescript
class Usuario { … }
class GerenciadorUsuario extends Usuario { … }
```

| Principle | Verdict | Notes |
|-----------|---------|-------|
| **S** | ✅ | Each class has a narrow responsibility. |
| **O** | ❌ | No abstraction or interface; extension requires modifying existing classes. |
| **L** | ⚠️ | `GerenciadorUsuario extends Usuario` — a manager **is-a** user? Semantically, a manager *manages* users, it doesn't *be* a user. This is an inheritance misuse that could violate LSP if the subclass diverges. |
| **I** | — | No interfaces. |
| **D** | ❌ | No abstractions at all. |

> [!IMPORTANT]
> `GerenciadorUsuario extends Usuario` uses **inheritance where composition is needed**. A user manager is not a user — it should *have* or *receive* a user.

---

### 5. `coupling-stamp.ts` — Stamp Coupling

```typescript
class Pedido { … }
class GerenciadorPedido extends Pedido {
  mostrarIdPedido(): void { console.log(this.getId()); }
}
```

| Principle | Verdict | Notes |
|-----------|---------|-------|
| **S** | ⚠️ | `GerenciadorPedido` inherits **all** of `Pedido`'s data (`id`, `descricao`, `valor`) but only uses `getId()`. This is stamp coupling by definition — it receives more data than it needs. |
| **O** | ❌ | Tightly coupled via inheritance; no extension without modification. |
| **L** | ⚠️ | Same issue as `coupling-data.ts` — a "manager" inheriting from an entity it should manage. |
| **I** | ⚠️ | Because it inherits the full `Pedido` interface (all three getters), it's exposed to methods it doesn't use — violating the spirit of ISP. |
| **D** | ❌ | No abstractions. |

---

## Cross-cutting Issues

> [!CAUTION]
> **No interfaces or abstractions anywhere.** This is the single biggest SOLID violation across all five files. Every dependency is on a concrete class.

### Pattern of violations:

1. **DIP is violated in all 5 files** — No interfaces, no abstract classes, no dependency injection via abstractions.
2. **OCP is violated in all 5 files** — Behavior cannot be extended without modifying existing code.
3. **Inheritance is misused in 2 files** (`coupling-data.ts`, `coupling-stamp.ts`) — "Manager" classes extend entity classes, creating a semantic `is-a` relationship that doesn't make sense.
4. **Control coupling** (`coupling-control.ts`) — Boolean flags drive behavior, violating both SRP and OCP.

### What these files actually are

These files appear to be **intentional examples of different coupling types** (a teaching tool), not examples of good design. They successfully illustrate:

| File | Coupling Type | Description |
|------|--------------|-------------|
| `coupling-content.ts` | Content | One module accesses internal data of another |
| `coupling-common.ts` | Common | Modules share a common concrete dependency |
| `coupling-control.ts` | Control | One module passes a flag to control another's behavior |
| `coupling-data.ts` | Data | Modules share simple data via inheritance |
| `coupling-stamp.ts` | Stamp | Module receives more data than it actually needs |

> [!NOTE]
> If the purpose is to demonstrate **bad coupling patterns** as a teaching exercise, then these files are doing exactly what they should — showing anti-patterns. They would make excellent "before" examples for a refactoring exercise that applies SOLID principles.
