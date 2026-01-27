import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class GameGUI extends JFrame {
    private String title;
    private Player[] players;
    private int turn;
    
    private JLabel infoLabel;
    private JButton damageButton;
    private JButton healButton;
    private JButton nextButton;

    // Player inner class
    class Player {
        String name;
        int hp;

        Player(String name) {
            this.name = name;
            this.hp = 100;
        }
    }

    // Constructor: this keyword example
    public GameGUI(String title) {
        this.title = title; // this.title refers to this GameGUI instance
        this.players = new Player[2];
        this.turn = 0;

        // Initialize players
        this.players[0] = new Player("Knight");
        this.players[1] = new Player("Mage");

        // GUI setup
        this.setTitle(this.title); // this.title for JFrame title
        this.setSize(400, 200);
        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        this.setLayout(new FlowLayout());

        infoLabel = new JLabel();
        updateInfo();

        damageButton = new JButton("Damage 10");
        healButton = new JButton("Heal 5");
        nextButton = new JButton("Next Turn");

        this.add(infoLabel);
        this.add(damageButton);
        this.add(healButton);
        this.add(nextButton);

        // Button actions using this keyword
        damageButton.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                thisActionDamage(); // calls the outer class method
            }

            // Inner method calling outer 'this'
            private void thisActionDamage() {
                GameGUI.this.players[GameGUI.this.turn].hp -= 10; // this = inner, GameGUI.this = outer
                updateInfo();
            }
        });

        healButton.addActionListener(e -> {
            GameGUI.this.players[GameGUI.this.turn].hp += 5;
            updateInfo();
        });

        nextButton.addActionListener(e -> {
            GameGUI.this.turn++;
            if (GameGUI.this.turn >= GameGUI.this.players.length) GameGUI.this.turn = 0;
            updateInfo();
        });

        this.setVisible(true);
    }

    // Update GUI info
    private void updateInfo() {
        Player current = this.players[this.turn]; // this.players refers to this GameGUI instance
        infoLabel.setText(
            "<html>Turn: " + (turn + 1) + " - Current Player: " + current.name +
            "<br>Knight HP: " + players[0].hp +
            " | Mage HP: " + players[1].hp + "</html>"
        );
    }

    public static void main(String[] args) {
        new GameGUI("Quest Game"); // 'this' used in constructor for JFrame title
    }
}

/*
Let’s break down the Java GUI GameGUI code using this in five clear paragraphs


---

Paragraph 1 – The class and constructor
The class GameGUI extends JFrame, which means it creates a window-based GUI application. Inside the constructor, this.title = title; shows the first use of this, where it explicitly sets the instance variable title of this GameGUI object. Similarly, this.players and this.turn initialize the state variables belonging to this specific instance of the game. This use of this ensures that each game window manages its own players and turn independently of any other objects.


---

Paragraph 2 – The Player inner class and this context
The inner class Player represents each player in the game with a name and hp. When creating players inside the constructor (this.players[0] = new Player("Knight");), this refers to the outer GameGUI instance, so the players are stored in the specific instance of the game. Here, this distinguishes the game’s array of players from any other arrays that might exist elsewhere in a larger program, keeping each game object self-contained.


---

Paragraph 3 – Buttons and inner classes
The buttons use ActionListener and lambda expressions to respond to user clicks. Inside the anonymous ActionListener, this would normally refer to the listener itself, not the GameGUI object. To access the outer class’s fields (players and turn), the code uses GameGUI.this. For example, GameGUI.this.players[GameGUI.this.turn].hp -= 10; ensures that the damage is applied to the correct player in the specific GameGUI instance, not some unrelated object.


---

Paragraph 4 – The updateInfo() method
The updateInfo() method displays the current turn and each player’s HP in the GUI label. Within this method, this.players and this.turn refer to the current GameGUI object, so it updates the information for the correct instance. Using this here keeps all methods and variables linked to the specific instance of the game, which is crucial for a GUI where multiple windows could exist or multiple games could be running in parallel.


---

Paragraph 5 – this in context and the main method
Finally, new GameGUI("Quest Game"); in the main method calls the constructor, creating a new instance of GameGUI. Here, this is automatically set to the new object being created, so all uses of this inside the constructor and methods refer to that new instance. This demonstrates the key principle: this always points to the object that owns the fields and methods in the current context, and when inside an inner class, OuterClass.this is used to reference the outer object.
*/