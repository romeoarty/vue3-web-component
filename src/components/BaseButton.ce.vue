<template>
  <button
    :class="[
      'mb-button',
      `mb-size-${size}`,
      `mb-priority-${priority}`,
      isActive ? `mb-is-active` : null
    ]"
    :disabled="isDisabled"
    v-bind="$attrs"
  >
    <slot name="label">
      <span class="mb-button-label">{{ label }}</span>
    </slot>
  </button>
</template>

<script setup lang="ts">
defineProps({
  priority: String,
  size: String,
  label: String,
  isActive: Boolean,
  isDisabled: Boolean
})
</script>

<style scoped lang="scss">
.mb-button {
  @apply max-w-sm inline-block items-center ml-1 border font-medium shadow-sm self-center align-bottom focus:outline-none;
  &:first-child {
    @apply ml-0;
  }
  &-label {
    @apply self-center truncate;
  }
  &.mb-size {
    // Size classes
    &-xs {
      @apply px-2 py-1 text-xs rounded focus:ring-2;
    }
    &-s {
      @apply px-4 py-2 text-sm rounded-md focus:ring-2;
    }
    &-m {
      @apply px-6 py-2 text-sm rounded-md focus:ring-2;
    }
    &-l {
      @apply px-10 py-3 text-base rounded-md focus:ring-2;
    }
    &-xl {
      @apply px-14 py-4 text-xl rounded-md focus:ring-2;
    }
  }

  &.mb-priority {
    &-primary {
      @apply border-transparent text-white bg-[#1B264F] focus:bg-[#1B264F] focus:ring-[#1B264F] focus:ring-opacity-20;
      &:enabled {
        @apply hover:bg-[#1B264F];
      }
      .mb-is-loading {
        span {
          @apply text-white;
        }
      }
    }
    &-secondary {
      @apply border-gray-300 text-gray-700 bg-white focus:border-blue-400 focus:text-blue-600 focus:bg-blue-50 focus:ring-blue-500 focus:ring-opacity-10;
      &:enabled {
        @apply hover:bg-gray-50 hover:text-gray-900;
      }
      .mb-is-loading {
        span {
          @apply text-gray-700;
        }
      }
    }
    &-base {
      @apply py-2 border-transparent text-gray-700 bg-transparent shadow-none focus:bg-blue-50 focus:text-blue-600 focus:ring-0;
      &:enabled {
        @apply hover:bg-gray-50 hover:text-gray-900;
      }
      .mb-is-loading {
        span {
          @apply text-gray-700;
        }
      }
    }
    &-success {
      @apply border-transparent text-white bg-green-600 focus:bg-green-600 focus:ring-green-500 focus:ring-opacity-20;
      &:enabled {
        @apply hover:bg-green-700;
      }
      .mb-is-loading {
        span {
          @apply text-white;
        }
      }
    }
    &-danger {
      @apply border-transparent text-white bg-red-600 focus:bg-red-500 focus:ring-red-600 focus:ring-opacity-20;
      &:enabled {
        @apply hover:bg-red-700;
      }
      .mb-is-loading {
        span {
          @apply text-white;
        }
      }
    }
    &-warning {
      @apply border-transparent text-yellow-800 bg-yellow-300 focus:bg-yellow-300 focus:ring-yellow-300 focus:ring-opacity-20;
      &:enabled {
        @apply hover:text-yellow-900 hover:bg-yellow-400;
      }
      .mb-is-loading {
        span {
          @apply text-yellow-800;
        }
      }
    }
    &-info {
      @apply border-transparent text-blue-800 bg-blue-200 focus:bg-blue-200 focus:ring-blue-200 focus:ring-opacity-20;
      &:enabled {
        @apply hover:text-blue-900 hover:bg-blue-300;
      }
      .mb-is-loading {
        span {
          @apply text-blue-800;
        }
      }
    }
    &-note {
      @apply border-transparent text-purple-800 bg-purple-200 focus:bg-purple-200 focus:ring-purple-200 focus:ring-opacity-20;
      &:enabled {
        @apply hover:text-purple-900 hover:bg-purple-300;
      }
      .mb-is-loading {
        span {
          @apply text-purple-800;
        }
      }
    }
  }

  &.mb-is-active {
    @apply border-blue-400 text-blue-600 bg-blue-50;
  }

  &:disabled {
    @apply opacity-70 cursor-not-allowed;
  }
}
</style>
