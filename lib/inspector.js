const compare = require('./compare-aliases')
const modes = require('./modes.enum')

/**
 * Given an env value, checks whether NODE_ENV correspond to that value
 *
 * Inspector has two modes of operation, with a given argument or not. Given a
 * argument, the value is compared to a known environment values (dev, prod,...)
 * then a exact insensitive case match is made with the value. If there's no
 * given value, then compare the raw value of NODE_ENV is returned
 *
 * @example <caption>with NODE_ENV="dev"</caption>
 * 	  inspector() // "dev"
 * 	  inspector("test") // false;
 * 	  inspector("development") // true;
 * 	  inspector("dev") // true;
 *
 * @param {string} [env] environment to be tested
 * @return {boolean | string}
 */
function inspector(env) {
  const nodeEnv = process.env.NODE_ENV ?? 'development'

  if (!env) {
    return nodeEnv
  }

  if (isKnownMode(env, nodeEnv)) {
    return true
  }

  return compare(env, nodeEnv)
}

/**
 * Compare for a known env mode
 * @param {string} env
 * @param {string} nodeEnv
 * @return {boolean}
 */
function isKnownMode(env, nodeEnv) {
  for (const mode of Object.values(modes)) {
    if (compareKnownMode(env, nodeEnv, Object.values(mode))) {
      return true
    }
  }

  return false
}

/**
 *
 * @param {string} env
 * @param {string} nodeEnv
 * @param {string[]} possibleValues
 * @return {boolean}
 */
function compareKnownMode(env, nodeEnv, possibleValues) {
  return compare(env, ...possibleValues) && compare(nodeEnv, ...possibleValues)
}

module.exports = inspector
