## cwt
#version
1. npm - 8.19.2
2. node - 16.13.1 

#Running
1. npm i
2. npm run build
3. npm run test

#Notes:
1. cache.ts - Cache has no memory limit
2. cache.mem.ts (Written before looking in LRU solution ) - Is solution with maxItems -> work as O(N) 
3. least.use.cache.ts  (google's help - LRU solution) - Is solution with maxItems -> work as O(1)


#Task
Cache
In this question, you will have to build a cache module.
Cache has no memory limit and should support the following API:

- new Cache() constructor to create a new cache instance
- get(key) key is string. returns either whatever value was set for this key, or undefined if
none was set.
- set(key, value) set value for key
- toObject() for testing purposes, returns all the cache elements as an object

Solve this after solving the first section:
- add a new argument to the Cache constructor - maxItems. If you try to add a new item
to the cache, and it already has maxItems, it should delete the item which hasn&#39;t been
used for the longest amount of time (used = single get or set).
- enhanced - make the solution work as O(1)
