<fieldset>
    @if ($field['show_label'])
        <div class="mb-3">
            <legend class="text-base font-medium text-black">
                {{ $field['label'] }}
            </legend>

            @if ($field['instructions'])
                <p class="mb-4 text-sm text-gray-500">{{ $field['instructions'] }}</p>
            @endif
        </div>
    @endif

    <div>
        <div class="{{ $field['inline'] ? 'items-center space-x-6' : 'flex-col justify-center space-y-3' }} flex">
            @foreach ($field['options'] as $option => $label)
                @include('livewire-forms::fields/checkbox')
            @endforeach
        </div>

        @include('components.form.fields.error')
    </div>
</fieldset>
