var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

var platform;
var player;
var cursors;
var stars;
var score = 0;
var scoreText;


function preload() {
    
    game.load.image('star', 'assets/star.png');
    game.load.spritesheet ('dude', 'assets/dude.png', 32, 48);
    game.load.image('ground', 'assets/platform.png');
    game.load.image('sky', 'assets/sky.png');
    
}

function create() {

    game.physics.startSystem(Phaser.Physics.ARCADE);
    
    game.add.sprite(0,0,'sky');
    
    platform = game.add.group();
    
    platform.enableBody = true;
    
    var ground = platform.create(0, game.world.height-64, 'ground');
    ground.scale.setTo(2,2);
    
    ground.body.immovable = true;
    
    var ledge = platform.create(400, 400, 'ground');
    
    ledge.body.immovable = true;
    
    ledge = platform.create(-150, 250, 'ground');
    
    ledge.body.immovable = true;

    player = game.add.sprite(32, game.world.height - 150, 'dude');
    
    game.physics.arcade.enable(player);
    
    player.body.bounce.y = 0.2;
    player.body.gravity.y = 300;
    player.body.collideWorldBounds = true;
    
    player.animations.add('left', [0, 1, 2, 3], 10, true);
    player.animations.add('right', [5, 6, 7, 8], 10, true);
   
    
    stars = game.add.group();
    
    stars.enableBody = true;
    
    for (var i = 0; i < 12; i++) {
        
        var star = stars.create(i * 70, 0, 'star');
        star.body.gravity.y = 200;
        star.body.bounce.y = 0.9 + Math.random() * 0.2;
        star.body.collideWorldBounds = true;
           
    }
    
    scoreText = game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });

}

function update() {
    
    //  Collide the player and the stars with the platforms
    game.physics.arcade.collide(player, platform);
    
    game.physics.arcade.collide(stars, platform);
    
    game.physics.arcade.collide(stars, stars);
    
    game.physics.arcade.overlap (player, stars, collectStars, null, this);
    
    cursors = game.input.keyboard.createCursorKeys();
    
    player.body.velocity.x = 0;
    
   if (cursors.left.isDown) {
       
       player.body.velocity.x = -150;
       
       player.animations.play('left');
   } else if (cursors.right.isDown) {
       
       player.body.velocity.x = 150;
       
       player.animations.play('right');
       
   } else {
       
       player.animations.stop();
       
       player.frame= 4;
       
   }
    
    
    if (cursors.up.isDown && player.body.touching.down) {
        
        player.body.velocity.y = -350;
        
    }
    
}

function collectStars (player, star) {
    
    star.kill();
    
    score += 10;
    scoreText.text = 'Score: ' + score;
    
}

