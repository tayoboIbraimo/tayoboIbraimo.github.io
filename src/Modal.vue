<script setup>
import { computed, onMounted, onUnmounted, watch } from "vue";

const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  maxWidth: {
    type: String,
    default: "2xl",
  },
  closeable: {
    type: Boolean,
    default: true,
  },
});

const emit = defineEmits(["close"]);

watch(
    () => props.show,
    () => {
      if (props.show) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = null;
      }
    },
);

const close = () => {
  if (props.closeable) {
    emit("close");
  }
};

const closeOnEscape = (e) => {
  if (e.key === "Escape" && props.show) {
    close();
  }
};

onMounted(() => document.addEventListener("keydown", closeOnEscape));

onUnmounted(() => {
  document.removeEventListener("keydown", closeOnEscape);
  document.body.style.overflow = null;
});

const maxWidthClass = computed(() => {
  return {
    sm: "sm:max-w-sm",
    md: "sm:max-w-md",
    lg: "sm:max-w-lg",
    xl: "sm:max-w-xl",
    "2xl": "sm:max-w-2xl",
    "3xl": "sm:max-w-3xl",
    "4xl": "sm:max-w-4xl",
    "5xl": "sm:max-w-5xl",
    screen: "sm:max-w-screen-xl",
  }[props.maxWidth];
});
</script>

<template>
  <teleport to="body">
    <transition leave-active-class="duration-200">
      <div
          v-show="show"
          class="absolute inset-0 px-4 py-6 sm:px-0 z-50 overflow-scroll"
          scroll-region
      >
        <transition
            enter-active-class="ease-out duration-300"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="ease-in duration-200"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
        >
          <div
              v-show="show"
              class="fixed inset-0 transform transition-all"
              @click="close"
          >
            <div
                class="absolute inset-0 bg-slate-950/50 dark:bg-gray-900/40 backdrop-blur-sm"
            />
          </div>
        </transition>

        <transition
            enter-active-class="ease-out duration-300"
            enter-from-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to-class="opacity-100 translate-y-0 sm:scale-100"
            leave-active-class="ease-in duration-200"
            leave-from-class="opacity-100 translate-y-0 sm:scale-100"
            leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        >
          <div
              v-show="show"
              :class="maxWidthClass"
              class="absolute left-[50%] top-[10%] z-50 grid w-full translate-x-[-50%] gap-4 p-6 duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full dark:border-slate-800"
          >
            <slot v-if="show" />
          </div>
        </transition>
      </div>
    </transition>
  </teleport>
</template>