# Javascript isLoaded function
isLoaded attempts to determine if an element resource has been loaded. It defaults, to maintain consistency to true if the element does not have a loaded resource. This function does not check for errors, hence should be combined with naturalWidth on images or alternatives on video, sound etc.
## Usage
```
    isLoaded(elem) === true || false
```

## Methodology

1. Checks `readystate`|`readyState`
2. `elem.completed`
3. `networkState`
3. `elem.complete` with src check
## Issues

* src check not robust, also check if likewise needs a href check for better portability/purpose
* Needs proper testing log, e.g. browser checks
* Jasmine refers to global filepaths rather than local using new inclusion checks
* NS version uses IMNS, not currently using ES6 namespacing
