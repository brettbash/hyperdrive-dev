@if ($field['show_label'])
    <div class="mb-1">
        <label
            for="{{ $field['handle'] }}"
            class="block font-medium text-black @if ($field['instructions']) text-base @else text-sm @endif"
        >
            {{ $field['label'] }}
        </label>

        @if ($field['instructions'])
            <p class="mb-4 text-sm text-gray-500">{{ $field['instructions'] }}</p>
        @endif
    </div>
@endif

<div>
    <select
        wire:model.lazy="{{ $field['key'] }}"
        id="{{ $field['handle'] }}"
        name="{{ $field['handle'] }}"

        @if (! $errors->has($field['key']))
            class="block w-full py-2 pl-3 pr-10 text-base border-gray-300 rounded-md focus:outline-none focus:ring-gold focus:border-gold sm:text-sm"

        @else
            class="block w-full py-2 pl-3 pr-10 text-base border-red-300 rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
            aria-invalid="true"
            aria-describedby="{{ $field['handle'] }}-error"
        @endif
    >

        @foreach ($field['options'] as $option => $label)
            <option value="{{ $option }}">{{ $label }}</option>
        @endforeach

    </select>
</div>

@include('components.form.fields.error')
