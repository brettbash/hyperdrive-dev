@if ($field['show_label'])
    <div class="mb-1">
        <label
            for="{{ $field['handle'] }}"
            class="block text-sm font-medium text-black"
        >
            {{ $field['label'] }}
        </label>
    </div>
@endif

<div>
    <input
        wire:model.lazy="{{ $field['key'] }}"
        id="{{ $field['handle'] }}"
        name="{{ $field['handle'] }}"
        type="{{ $field['input_type'] ?? 'text' }}"
        autocomplete="{{ $field['autocomplete'] }}"
        placeholder="{{ $field['placeholder'] }}"

        @if (!$errors->has($field['key']))
            class="w-full"

        @else
            class="block w-full border-red-600"
            aria-invalid="true"
            aria-describedby="{{ $field['handle'] }}-error"
        @endif
    />
</div>

@include('components.form.fields.error')
