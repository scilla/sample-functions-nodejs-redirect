function main(args) {
  return {
    'statusCode': 302,
    'headers': {
      'Location': 'https://instagram.com/stefanocilla'
    },
    'body': 'redirecting...'
  }
}

exports.main = main
