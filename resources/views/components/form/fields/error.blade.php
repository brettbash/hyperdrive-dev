@error($field['key'])
    <span
        class="mt-2 text-red-600 text-sm lg:text-xs font-mono"
        id="{{ $field['handle'] }}-error"
    >
        {{ $message }}
    </span>
@enderror
