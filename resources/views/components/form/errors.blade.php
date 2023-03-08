@if ($errors->any())
    <div class="col-span-1 md:col-span-12 mt-3 p-4 md:p-6 bg-gray-50">
        <div class="flex">
            <div class="relative flex-shrink-0 w-5 h-5 rounded-full bg-black">
                <div class="absolute flex items-center w-full h-full p-1.5 transform -rotate-45">
                    <div class="w-full h-[2px] bg-gold-200"></div>
                </div>

                <div class="absolute flex items-center w-full h-full p-1.5 transform rotate-45">
                    <div class="w-full h-[2px] bg-gold-200"></div>
                </div>
            </div>

            <div class="ml-3 mt-0.5">
                <h3 class="text-black text-sm lg:text-xs font-mono uppercase">
                    @choice('There was an error with your submission:|There were :count errors with your submission:', $errors->count())
                </h3>

                <div class="mt-2 text-gray-700 text-sm lg:text-xs font-mono">
                    <ul class="pl-5 space-y-1 list-disc">
                        @foreach ($errors->all() as $error)
                            <li>{{ $error }}</li>
                        @endforeach
                    </ul>
                </div>

            </div>

        </div>
    </div>
@endif
