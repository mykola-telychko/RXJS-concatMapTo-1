// Import stylesheets
import './style.css';
screenLog.init();

import { of } from 'rxjs/observable/of';
import { interval } from 'rxjs/observable/interval';
import { concatMapTo, delay, take } from 'rxjs/operators';

// https://www.learnrxjs.io/learn-rxjs/operators/transformation/concatmapto
// Example 1: Map to basic observable (simulating request)

//emit value every 2 seconds
const srcInterval$ = interval(500).pipe(take(5));
const fakeRequest = of('Network request complete').pipe(delay(3000));
//wait for first to complete before next is subscribed
const example = srcInterval$.pipe(concatMapTo(fakeRequest));
//output: Network request complete...3s...Network request complete'
const subscribe = example.subscribe((val) => console.log(val));
