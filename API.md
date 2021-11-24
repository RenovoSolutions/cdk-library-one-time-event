# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### At <a name="@renovosolutions/cdk-library-one-time-event.At"></a>

#### Initializers <a name="@renovosolutions/cdk-library-one-time-event.At.Initializer"></a>

```typescript
import { At } from '@renovosolutions/cdk-library-one-time-event'

new At(scope: Construct, id: string, props: AtProps)
```

##### `scope`<sup>Required</sup> <a name="@renovosolutions/cdk-library-one-time-event.At.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="@renovosolutions/cdk-library-one-time-event.At.parameter.id"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="@renovosolutions/cdk-library-one-time-event.At.parameter.props"></a>

- *Type:* [`@renovosolutions/cdk-library-one-time-event.AtProps`](#@renovosolutions/cdk-library-one-time-event.AtProps)

---



#### Properties <a name="Properties"></a>

##### `schedule`<sup>Required</sup> <a name="@renovosolutions/cdk-library-one-time-event.At.property.schedule"></a>

```typescript
public readonly schedule: Schedule;
```

- *Type:* [`@aws-cdk/aws-events.Schedule`](#@aws-cdk/aws-events.Schedule)

---


### OnDeploy <a name="@renovosolutions/cdk-library-one-time-event.OnDeploy"></a>

#### Initializers <a name="@renovosolutions/cdk-library-one-time-event.OnDeploy.Initializer"></a>

```typescript
import { OnDeploy } from '@renovosolutions/cdk-library-one-time-event'

new OnDeploy(scope: Construct, id: string, props: OnDeployProps)
```

##### `scope`<sup>Required</sup> <a name="@renovosolutions/cdk-library-one-time-event.OnDeploy.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="@renovosolutions/cdk-library-one-time-event.OnDeploy.parameter.id"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="@renovosolutions/cdk-library-one-time-event.OnDeploy.parameter.props"></a>

- *Type:* [`@renovosolutions/cdk-library-one-time-event.OnDeployProps`](#@renovosolutions/cdk-library-one-time-event.OnDeployProps)

---



#### Properties <a name="Properties"></a>

##### `schedule`<sup>Required</sup> <a name="@renovosolutions/cdk-library-one-time-event.OnDeploy.property.schedule"></a>

```typescript
public readonly schedule: Schedule;
```

- *Type:* [`@aws-cdk/aws-events.Schedule`](#@aws-cdk/aws-events.Schedule)

---


## Structs <a name="Structs"></a>

### AtProps <a name="@renovosolutions/cdk-library-one-time-event.AtProps"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { AtProps } from '@renovosolutions/cdk-library-one-time-event'

const atProps: AtProps = { ... }
```

##### `date`<sup>Required</sup> <a name="@renovosolutions/cdk-library-one-time-event.AtProps.property.date"></a>

```typescript
public readonly date: Date;
```

- *Type:* `Date`

The future date to use for one time event.

---

### OnDeployProps <a name="@renovosolutions/cdk-library-one-time-event.OnDeployProps"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { OnDeployProps } from '@renovosolutions/cdk-library-one-time-event'

const onDeployProps: OnDeployProps = { ... }
```

##### `offsetMinutes`<sup>Optional</sup> <a name="@renovosolutions/cdk-library-one-time-event.OnDeployProps.property.offsetMinutes"></a>

```typescript
public readonly offsetMinutes: number;
```

- *Type:* `number`
- *Default:* 10

The number of minutes to add to the current time when generating the expression.

Should exceed the expected time for the appropriate resources to converge.

---



