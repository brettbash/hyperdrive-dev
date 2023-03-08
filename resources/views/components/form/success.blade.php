@if($success)
    <div class="col-span-1 md:col-span-12 flex justify-center p-4 md:p-6">

        <div class="relative flex-shrink-0 flex justify-center items-center w-5 h-5 rounded-full bg-gold">
            <svg class="w-2 text-white fill-current" viewBox="0 0 24 24"><g transform="matrix(1,0,0,1,0,0)"><path d="M23.146,5.4l-2.792-2.8c-0.195-0.196-0.512-0.196-0.707-0.001c0,0-0.001,0.001-0.001,0.001L7.854,14.4 c-0.195,0.196-0.512,0.196-0.707,0.001c0,0-0.001-0.001-0.001-0.001l-2.792-2.8c-0.195-0.196-0.512-0.196-0.707-0.001 c0,0-0.001,0.001-0.001,0.001l-2.792,2.8c-0.195,0.195-0.195,0.512,0,0.707L7.146,21.4c0.195,0.196,0.512,0.196,0.707,0.001 c0,0,0.001-0.001,0.001-0.001L23.146,6.1C23.337,5.906,23.337,5.594,23.146,5.4z" stroke="none" fill="currentColor" stroke-width="0" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>
        </div>

        <div class="ml-3 mt-0.5">
            <h3 class="text-black text-sm lg:text-xs font-mono uppercase">
                The form was successfully submitted!
            </h3>
        </div>

    </div>
@endif
