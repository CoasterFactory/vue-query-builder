<template>
  <span>
    <div class="vqb-rule" :class="{ 'panel panel-default form-inline': styled }" v-if="!vuetify">
      <div :class="{ 'form-group': styled }">
        <label>{{ rule.label }}</label>

        <select v-if="typeof rule.operands !== 'undefined'" v-model="query.selectedOperand" :class="{ 'form-control': styled }">
          <option v-for="operand in rule.operands">{{ operand }}</option>
        </select>

        <select v-if="! isMultipleChoice" v-model="query.selectedOperator" :class="{ 'form-control': styled }">
          <option v-for="operator in rule.operators" v-bind:value="operator">
            {{ operator }}
          </option>
        </select>

        <input :class="{ 'form-control': styled }" v-if="rule.inputType === 'text'" type="text" v-model="query.value" :placeholder="labels.textInputPlaceholder"></input>
        <input :class="{ 'form-control': styled }" v-if="rule.inputType === 'number'" type="number" v-model="query.value"></input>

        <template v-if="isCustomComponent">
          <component :value="query.value" @input="updateQuery" :is="rule.component" v-bind="rule.props"></component>
        </template>

        <div class="checkbox" v-if="rule.inputType === 'checkbox'">
          <label v-for="choice in rule.choices">
            <input type="checkbox" :value="choice.value" v-model="query.value"> {{ choice.label }}
          </label>
        </div>

        <div class="radio" v-if="rule.inputType === 'radio'">
          <label v-for="choice in rule.choices">
            <input type="radio" :value="choice.value" v-model="query.value"> {{ choice.label }}
          </label>
        </div>

        <select
          v-if="rule.inputType === 'select'"
          :class="{ 'form-control': styled }"
          :multiple="rule.type === 'multi-select'"
          v-model="query.value">
          <option v-for="choice in rule.choices" :value="choice.value">{{ choice.label }}</option>
        </select>

        <button :class="{ 'close pull-right': styled }" @click="remove" v-html="labels.removeRule"></button>
      </div>
    </div>
    <v-card v-else>
      <v-card-title class="py-0">
        <h3 class="pr-3">{{ rule.label }}</h3>

        <v-select v-if="typeof rule.operands !== 'undefined'" v-model="query.selectedOperand" :items="rule.operands" autocomplete></v-select>

        <v-select v-if="! isMultipleChoice" v-model="query.selectedOperator" :items="rule.operators" autocomplete></v-select>

        <v-text-field v-if="rule.inputType === 'text'" type="text" v-model="query.value" :placeholder="labels.textInputPlaceholder"></v-text-field>
        <v-text-field v-if="rule.inputType === 'number'" type="number" v-model="query.value"></v-text-field>

        <template v-if="isCustomComponent">
          <component :value="query.value" @input="updateQuery" :is="rule.component" v-bind="rule.props"></component>
        </template>

        <v-checkbox v-if="rule.inputType === 'checkbox'" v-for="choice in rule.choices" v-model="query.value" :true-value="choice.value" :label="choice.label"></v-checkbox>

        <v-radio-group v-if="rule.inputType === 'radio'" v-model="query.value">
          <v-radio v-for="choice in rule.choices" :value="choice.value" :label="choice.label"></v-radio>
        </v-radio-group>

        <v-select v-if="rule.inputType === 'select'" :multiple="rule.type === 'multi-select'" v-model="query.value" :items="rule.choices" item-text="label" autocomplete></v-select>

        <v-menu
          v-if="rule.inputType === 'date'"
          lazy
          :close-on-content-click="false"
          v-model="menu"
          transition="scale-transition"
          full-width
          :nudge-right="40"
          :nudge-bottom="50"
          max-width="290px"
          min-width="290px"
        >
          <v-text-field
            slot="activator"
            label="Picker in menu"
            v-model="query.value"
            prepend-icon="event"
            readonly
          ></v-text-field>
          <v-date-picker v-model="query.value" no-title scrollable actions>
            <template slot-scope="{ save, cancel }">
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn flat color="primary" @click="cancel">Cancel</v-btn>
                <v-btn flat color="primary" @click="save">OK</v-btn>
              </v-card-actions>
            </template>
          </v-date-picker>
        </v-menu>

        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-btn fab dark small @click="remove" v-html="labels.removeRule" color="primary"></v-btn>
      </v-card-title>
    </v-card>
  </span>
</template>

<script>
import deepClone from './utilities.js';

export default {
  name: "query-builder-rule",

  props: ['query', 'index', 'rule', 'styled', 'vuetify', 'labels'],

  data() {
    return {
      menu: false
    }
  },

  beforeMount () {
    if (this.rule.type === 'custom-component') {
      this.$options.components[this.id] = this.rule.component;
    }
  },

  methods: {
    remove: function() {
      this.$emit('child-deletion-requested', this.index);
    },
    updateQuery(value) {
      let updated_query = deepClone(this.query);
      updated_query.value = value;
      this.$emit('update:query', updated_query);
    }
  },

  computed: {
    isMultipleChoice () {
      return ['radio', 'checkbox', 'select'].indexOf(this.rule.inputType) >= 0;
    },

    isCustomComponent () {
      return this.rule.type === 'custom-component';
    }
  },

  mounted () {
    let updated_query = deepClone(this.query);
    if (this.rule.inputType === 'checkbox') {
      updated_query.value = [];
      this.$emit('update:query', updated_query);
    }
    if (this.rule.type === 'select') {
      updated_query.value = this.rule.choices[0].value;
      this.$emit('update:query', updated_query);
    }
    if (this.rule.type === 'custom-component') {
      updated_query.value = this.rule.default || null;
      this.$emit('update:query', updated_query);
    }
  }
}
</script>
