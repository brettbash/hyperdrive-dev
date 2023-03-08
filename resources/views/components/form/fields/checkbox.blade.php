<div class="flex items-start">
    <div class="flex items-center h-5">
        <input
            wire:model.lazy="{{ $field['key'] }}"
            id="{{ $field['handle'] }}.{{ $option }}"
            name="{{ $field['handle'] }}"
            value="{{ $option }}"
            type="checkbox"

            @if (!$errors->has($field['key']))
                class="w-4 h-4 text-gold-600 border-gray-300 rounded focus:ring-gold-300"

            @else
                class="w-4 h-4 text-gold-600 border-red-300 rounded focus:ring-gold-300"
                aria-invalid="true"
                aria-describedby="{{ $field['handle'] }}-error"
            @endif
        />
    </div>

    <div class="ml-3 text-sm">
        <label
            for="{{ $field['handle'] }}.{{ $option }}"
            class="font-medium {{ $errors->has($field['key']) ? 'text-red-700' : 'text-black' }}"
        >
            {{ $label }}
        </label>
    </div>
</div>
