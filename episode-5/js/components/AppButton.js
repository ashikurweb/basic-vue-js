export default {
  template: `
        <button class='bg-violet-600 text-white py-2 px-5 font-semibold rounded-lg hover:bg-violet-700 transition-all disabled:cursor-not-allowed' :disabled="processing">
            <slot />
        </button>
    `,

  data() {
    return {
      processing: true,
    };
  },
};
