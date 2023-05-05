<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Click;

class ClicksController extends Controller
{
    public function fetchClicks(Request $request)
    {
        $today = $request->filled('date') ? date('Y-m-d', strtotime($request->date)) : date('Y-m-d');

        $clicksToday = Click::whereDate('clicks_date', $today)
                            ->latest()
                            ->first();

        return response()->json($clicksToday);
    }
    
    public function triggerClick(Request $request)
    {
        $today = $request->filled('date') ? date('Y-m-d', strtotime($request->date)) : date('Y-m-d');

        $clicksToday = Click::whereDate('clicks_date', $today)
                            ->latest()
                            ->first();

        if(!$clicksToday){
            $clicksToday = new Click();
            $clicksToday->clicks_date = $today;
        }

        $clicksToday->clicks_count = $clicksToday->clicks_count + 1;
        $clicksToday->save();

        return response()->json($clicksToday);
    }
}
