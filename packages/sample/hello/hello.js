function main(args) {
  return {
    'statusCode': 302,
    'headers': {
      'Location': 'http://def.it'
    },
    'body': ''
  }
}

exports.main = main
