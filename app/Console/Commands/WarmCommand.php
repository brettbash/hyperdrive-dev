<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Statamic\Console\RunsInPlease;
use Statamic\Facades\Entry;

class WarmCommand extends Command
{
    use RunsInPlease;

    protected $name = 'statamic:hyperdrive:warm';
    protected $description = "Warms the static cache by visiting all entry URLs.";

    public function handle()
    {
        $this->info('Warming the static cache.');

        $this->context = stream_context_create(array(
            'http' => array('ignore_errors' => true),
        ));

        Entry::query()
            ->where('status', 'published')
            ->get()
            ->map->absoluteUrl()
            ->unique()
            ->each(function ($url) {
                $visit = file_get_contents($url, false, $this->context);
            });
    }
}
