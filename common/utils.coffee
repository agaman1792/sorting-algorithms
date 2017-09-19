ARR_LEN_VALUE = 1000
ARR_MIN_VALUE = 0
ARR_MAX_VALUE = 100000

rand = (min = ARR_MIN_VALUE, max = ARR_MAX_VALUE) -> Math.floor(Math.random() * (max - min + 1)) + min
mapToRand = (min = ARR_MIN_VALUE, max = ARR_MAX_VALUE) -> (val, idx) -> rand(min, max)
randArray = (size = ARR_LEN_VALUE, min = ARR_MIN_VALUE, max = ARR_MAX_VALUE) -> Array.apply(null, Array(size)).map(mapToRand(min, max))

printResults = (res) ->
  if (!res)
    return;

  if (!res.stats)
    return

  console.log "Comparisons : #{res.stats.comparisons}"
  console.log "Swaps       : #{res.stats.swaps}"
  console.log "Exec time   : #{res.stats.time}"

export rand
export mapToRand
export randArray
export printResults