# parse-data

A couple of simple utils for parsing data. One reads the package.json file to get the version field. Needed when not running from a native node environment. Another reads a CSV like file and returns an array of array strings representing the data. The rows are delimited by new lines, the columns are delimited by the passed in separator, typically a comma or tab.

At the moment this is not intended for public consumption.
