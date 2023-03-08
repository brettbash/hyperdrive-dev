<div class="hidden col-span-1">

    <label for="{{ $field['handle'] }}">
        {{ $field['label'] }}
    </label>

    <input
        wire:model.defer="{{ $field['key'] }}"
        type="text"
        name="{{ $field['handle'] }}"
        id="{{ $field['handle'] }}"
        tabindex="-1"
        autocomplete="off"
    />

</div>
