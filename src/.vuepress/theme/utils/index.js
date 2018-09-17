import dateFnsDistanceInWordsToNow from 'date-fns/distance_in_words_to_now'
import dateFnsFormat from 'date-fns/format'
import locale from 'date-fns/locale/zh_cn'

export function format (date, formatStr) {
  return dateFnsFormat(date, formatStr, { locale })
}

export function distanceInWordsToNow (date) {
  return dateFnsDistanceInWordsToNow(date, { addSuffix: true, locale })
}

export default {
  format,
  distanceInWordsToNow,
}
