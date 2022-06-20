export function reactive (target: object) {
  const obj = new Proxy(target, {
    get: (target, key) => {
      return target[key]
    },
    set: (target, key, value) => {
      target[key] = value
      return true
    }
  })
  return obj
}