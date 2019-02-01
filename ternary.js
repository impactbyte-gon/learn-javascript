const grade = 82

if (grade > 90) console.log('PASSED!')
else if (grade > 80) console.log('ALMOST PASSED!')
else console.log('FAILED!')

grade > 90
  ? console.log('PASSED!')
  : grade > 80
  ? console.log('ALMOST PASSED!')
  : console.log('FAILED!')
