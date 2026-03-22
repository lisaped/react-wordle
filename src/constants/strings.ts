export const GAME_TITLE = 'Speciest'

export const WIN_MESSAGES = [
  'Brilliant!',
  'You think like a Speciest!',
  'The Covenant would be proud!',
  'Worthy of the Synthesis!',
  'Sharp as a Schizm!',
]

export const GAME_COPIED_MESSAGE = 'Game copied to clipboard'
export const ABOUT_GAME_MESSAGE = 'About this game'
export const NOT_ENOUGH_LETTERS_MESSAGE = 'Not enough letters'
export const WORD_NOT_FOUND_MESSAGE = 'Word not found'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `The word was ${solution}. Read Speciest to discover more!`
export const ENTER_TEXT = 'Enter'
export const DELETE_TEXT = 'Delete'
export const STATISTICS_TITLE = 'Statistics'
export const GUESS_DISTRIBUTION_TEXT = 'Guess Distribution'
export const NEW_WORD_TEXT = 'New word in'
export const SHARE_TEXT = 'Share'
export const TOTAL_TRIES_TEXT = 'Total tries'
export const SUCCESS_RATE_TEXT = 'Success rate'
export const CURRENT_STREAK_TEXT = 'Current streak'
export const BEST_STREAK_TEXT = 'Best streak'

export const DISCOURAGE_INAPP_BROWSER_TEXT =
  'To get the best experience, please open this game directly in your browser rather than within an app.'
export const HARD_MODE_ALERT_MESSAGE =
  'Hard mode can only be enabled at the start of a new game!'
export const SHARE_FAILURE_TEXT =
  'Unable to share the results of the game. Please try again.'

export const DATEPICKER_TITLE = 'Choose a past date'
export const DATEPICKER_CHOOSE_TEXT = 'Choose'
export const DATEPICKER_TODAY_TEXT = 'today'

export const ARCHIVE_GAMEDATE_TEXT = 'Archive game date'
export const SETTINGS_TITLE = 'Settings'
export const HARD_MODE_DESCRIPTION =
  'Any revealed hints must be used in subsequent guesses'
export const DARK_MODE_DESCRIPTION = 'For those who prefer darker themes'
export const HIGH_CONTRAST_MODE_DESCRIPTION =
  'For improved colour vision accessibility'
export const MIGRATE_BUTTON_TEXT = 'Transfer your stats'
export const MIGRATE_DESCRIPTION_TEXT =
  'Click here to transfer your statistics to a new device.'
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `Guess must contain ${letter}`
export const WRONG_SPOT_MESSAGE = (letter: string, position: number) =>
  `Must use ${letter} in position ${position}`
