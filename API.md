# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### At <a name="At" id="@renovosolutions/cdk-library-one-time-event.At"></a>

#### Initializers <a name="Initializers" id="@renovosolutions/cdk-library-one-time-event.At.Initializer"></a>

```typescript
import { At } from '@renovosolutions/cdk-library-one-time-event'

new At(scope: Construct, id: string, props: AtProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-library-one-time-event.At.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-library-one-time-event.At.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-library-one-time-event.At.Initializer.parameter.props">props</a></code> | <code><a href="#@renovosolutions/cdk-library-one-time-event.AtProps">AtProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@renovosolutions/cdk-library-one-time-event.At.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@renovosolutions/cdk-library-one-time-event.At.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@renovosolutions/cdk-library-one-time-event.At.Initializer.parameter.props"></a>

- *Type:* <a href="#@renovosolutions/cdk-library-one-time-event.AtProps">AtProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@renovosolutions/cdk-library-one-time-event.At.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@renovosolutions/cdk-library-one-time-event.At.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@renovosolutions/cdk-library-one-time-event.At.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@renovosolutions/cdk-library-one-time-event.At.isConstruct"></a>

```typescript
import { At } from '@renovosolutions/cdk-library-one-time-event'

At.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@renovosolutions/cdk-library-one-time-event.At.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-library-one-time-event.At.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@renovosolutions/cdk-library-one-time-event.At.property.schedule">schedule</a></code> | <code>aws-cdk-lib.aws_events.Schedule</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@renovosolutions/cdk-library-one-time-event.At.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@renovosolutions/cdk-library-one-time-event.At.property.schedule"></a>

```typescript
public readonly schedule: Schedule;
```

- *Type:* aws-cdk-lib.aws_events.Schedule

---


### OnDeploy <a name="OnDeploy" id="@renovosolutions/cdk-library-one-time-event.OnDeploy"></a>

#### Initializers <a name="Initializers" id="@renovosolutions/cdk-library-one-time-event.OnDeploy.Initializer"></a>

```typescript
import { OnDeploy } from '@renovosolutions/cdk-library-one-time-event'

new OnDeploy(scope: Construct, id: string, props: OnDeployProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-library-one-time-event.OnDeploy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-library-one-time-event.OnDeploy.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-library-one-time-event.OnDeploy.Initializer.parameter.props">props</a></code> | <code><a href="#@renovosolutions/cdk-library-one-time-event.OnDeployProps">OnDeployProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@renovosolutions/cdk-library-one-time-event.OnDeploy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@renovosolutions/cdk-library-one-time-event.OnDeploy.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@renovosolutions/cdk-library-one-time-event.OnDeploy.Initializer.parameter.props"></a>

- *Type:* <a href="#@renovosolutions/cdk-library-one-time-event.OnDeployProps">OnDeployProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@renovosolutions/cdk-library-one-time-event.OnDeploy.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@renovosolutions/cdk-library-one-time-event.OnDeploy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@renovosolutions/cdk-library-one-time-event.OnDeploy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@renovosolutions/cdk-library-one-time-event.OnDeploy.isConstruct"></a>

```typescript
import { OnDeploy } from '@renovosolutions/cdk-library-one-time-event'

OnDeploy.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@renovosolutions/cdk-library-one-time-event.OnDeploy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-library-one-time-event.OnDeploy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@renovosolutions/cdk-library-one-time-event.OnDeploy.property.schedule">schedule</a></code> | <code>aws-cdk-lib.aws_events.Schedule</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@renovosolutions/cdk-library-one-time-event.OnDeploy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@renovosolutions/cdk-library-one-time-event.OnDeploy.property.schedule"></a>

```typescript
public readonly schedule: Schedule;
```

- *Type:* aws-cdk-lib.aws_events.Schedule

---


## Structs <a name="Structs" id="Structs"></a>

### AtProps <a name="AtProps" id="@renovosolutions/cdk-library-one-time-event.AtProps"></a>

#### Initializer <a name="Initializer" id="@renovosolutions/cdk-library-one-time-event.AtProps.Initializer"></a>

```typescript
import { AtProps } from '@renovosolutions/cdk-library-one-time-event'

const atProps: AtProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-library-one-time-event.AtProps.property.date">date</a></code> | <code>Date</code> | The future date to use for one time event. |

---

##### `date`<sup>Required</sup> <a name="date" id="@renovosolutions/cdk-library-one-time-event.AtProps.property.date"></a>

```typescript
public readonly date: Date;
```

- *Type:* Date

The future date to use for one time event.

---

### OnDeployProps <a name="OnDeployProps" id="@renovosolutions/cdk-library-one-time-event.OnDeployProps"></a>

#### Initializer <a name="Initializer" id="@renovosolutions/cdk-library-one-time-event.OnDeployProps.Initializer"></a>

```typescript
import { OnDeployProps } from '@renovosolutions/cdk-library-one-time-event'

const onDeployProps: OnDeployProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-library-one-time-event.OnDeployProps.property.offsetMinutes">offsetMinutes</a></code> | <code>number</code> | The number of minutes to add to the current time when generating the expression. |

---

##### `offsetMinutes`<sup>Optional</sup> <a name="offsetMinutes" id="@renovosolutions/cdk-library-one-time-event.OnDeployProps.property.offsetMinutes"></a>

```typescript
public readonly offsetMinutes: number;
```

- *Type:* number
- *Default:* 10

The number of minutes to add to the current time when generating the expression.

Should exceed the expected time for the appropriate resources to converge.

---



