export default {
  template: `
    <button 
      :class="{
        'text-white py-2 px-5 font-semibold rounded-lg transition-all': true,
        'bg-blue-500 hover:bg-blue-600': type === 'primary',
        'bg-purple-500 hover:bg-purple-600': type === 'secondary',
        'bg-green-500 hover:bg-green-600': type === 'success',
        'is-loading': processing
      }" 
      :disabled="processing"
    >
      <slot />
    </button>
  `,

  props: {
    type: {
      type: String,
      default: 'primary',
    },
    
    processing: {
      type: Boolean,
      default: false
    }
  }
};
