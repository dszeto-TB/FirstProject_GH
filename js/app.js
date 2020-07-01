// replace these values with those generated in your TokBox Account
var apiKey = "46817804"; 
var sessionId = "1_MX40NjgxNzgwNH5-MTU5MzQ5MzUwOTE0NH5kUmhzWDRDcXRhOVhWdndnVFZOdWVtU2t-fg";
var token = "T1==cGFydG5lcl9pZD00NjgxNzgwNCZzaWc9YzU2YWIwNzJiNjNjYTQyYjhiNDNmMzQwYzI3YzJmMmEzMTdjNDcxMTpzZXNzaW9uX2lkPTFfTVg0ME5qZ3hOemd3Tkg1LU1UVTVNelE1TXpVd09URTBOSDVrVW1oeldEUkRjWFJoT1ZoV2RuZG5WRlpPZFdWdFUydC1mZyZjcmVhdGVfdGltZT0xNTkzNDkzNTMyJm5vbmNlPTAuNTg1NzYwNDk4ODMwMzcmcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTU5NjA4NTUzMiZpbml0aWFsX2xheW91dF9jbGFzc19saXN0PQ=="; // 
//secret = 95fff681de0d129d9be17fc86dcc9a79005eb014
// (optional) add server code here

// Handling all of our errors here by alerting them
function handleError(error) {
  if (error) {
    alert(error.message);
  }
}

function initializeSession() {
  var session = OT.initSession(apiKey, sessionId);

  // Subscribe to a newly created stream
  
  session.on('streamCreated', function(event) {
  session.subscribe(event.stream, 'subscriber', {
    insertMode: 'append',
    width: '100%',
    height: '100%'
  }, handleError);
});


  // Create a publisher
  var publisher = OT.initPublisher('publisher', {
    insertMode: 'append',
    width: '100%',
    height: '100%'
  }, handleError);

  // Connect to the session
  session.connect(token, function(error) {
    // If the connection is successful, publish to the session
    if (error) {
      handleError(error);
    } else {
      session.publish(publisher, handleError);
    }
  });
}


initializeSession();
