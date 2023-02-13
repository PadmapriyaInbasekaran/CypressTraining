describe('Test suite', () =>{

it('Play mp3 file', () =>{
    cy.visit('https://demo.guru99.com/test/newtours/index.php')
    
cy.fixture('mp3/FixturesExample.mp4','base64').then((mp4) =>
{
    const uri = 'data:audio/mp3;base64,' + mp4
    const audio = new Audio(uri)
  
    audio.play()
})

})
})