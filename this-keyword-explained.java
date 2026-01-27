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