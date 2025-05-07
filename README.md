# Vue Custom Checkbox Component

This is a simple and customizable Vue checkbox component that supports three states: `true`, `false`, and `undefined` (mixed state). It can be used in situations where you need a tri-state checkbox, such as toggling between options or showing an intermediate state.

## Features

- **Tri-state checkbox**: Supports `true`, `false`, and `undefined` states.
- **Customizable labels**: Pass custom labels for each state (`true-label`, `false-label`, and `undefined-label`).
- **Keyboard accessibility**: The checkbox can be toggled using the spacebar (`keydown.space`).
- **ARIA support**: Proper ARIA attributes (`aria-checked`) are set to improve accessibility.
- **Customizable appearance**: The checkbox’s visual state changes based on the value (`true`, `false`, `undefined`).

## Installation

To install this component, you can use npm or yarn.

```bash
npm i vue3-tri-state-checkbox
```

```bash
yarn add vue3-tri-state-checkbox
```

## Basic Usage

```bash
// main.ts or main.js
import { createApp } from 'vue';
import App from './App.vue';

import TriStateCheckbox from 'vue3-tri-state-checkbox';

const app = createApp(App);

app.component('TriStateCheckbox', TriStateCheckbox);
app.mount('#app');
```

```bash
<template>
  <CustomCheckbox
    v-model="checkboxValue"
    true-label="Enabled"
    false-label="Disabled"
    undefined-label="Intermediate"
    @change="handleChange()"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const checkboxValue = ref<boolean>();

function() {
  console.log('Checkbox state changed:', checkboxValue.value);
};
</script>
```
### Props

| Prop Name         | Type     | Default     | Description                                                                  |
|-------------------|----------|-------------|------------------------------------------------------------------------------|
| `v-model`         | `boolean \| undefined` | `undefined`   | The current state of the checkbox. Supports `true`, `false`, or `undefined`. |
| `disabled`        | `boolean\| undefined` | `false`     | Disables the checkbox interaction when set to `true`.                        |
| `undefined-label` | `string\| undefined` | `undefined` | Label to display when the checkbox is in the `undefined` state.              |
| `true-label`      | `string\| undefined` | `undefined` | Label to display when the checkbox is in the `true` state.                   |
| `false-label`     | `string\| undefined` | `undefined` | Label to display when the checkbox is in the `false` state.                  |
| `true-color`      | `string`              | `#007ad9`   | Background color when the checkbox is in the `true` state.                   |
| `false-color`     | `string`              | `red`       | Background color when the checkbox is in the `false` state.                  |
| `undefined-color` | `string`              | `undefined` | Background color when the checkbox is in the `undefined` state.              |

## Event

@change: Emitted when the state of the checkbox changes.