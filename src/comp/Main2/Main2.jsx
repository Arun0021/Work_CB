import React from 'react'
import Part1 from './Part1'
import Part2 from './Part2'

const Main2 = ({ isDarkMode }) => {
  return (
    <>
    <Part1 isDarkMode={isDarkMode}  />
    <Part2  isDarkMode={isDarkMode} />
    </>
  )
}

export default Main2
