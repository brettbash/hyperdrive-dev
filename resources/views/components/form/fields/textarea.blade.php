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
    <textarea
        wire:model.lazy="{{ $field['key'] }}"
        id="{{ $field['handle'] }}"
        name="{{ $field['handle'] }}"
        placeholder="{{ $field['placeholder'] }}"
        rows="5"

        @if (!$errors->has($field['key']))
            class="block w-full"

        @else
            class="block w-full border-red-600"
            aria-invalid="true"
            aria-describedby="{{ $field['handle'] }}-error"
        @endif
    ></textarea>
</div>

@include('components.form.fields.error')
