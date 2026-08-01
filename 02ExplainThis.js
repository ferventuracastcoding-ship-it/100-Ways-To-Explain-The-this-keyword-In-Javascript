import java.util.LinkedList;

class Starship {
  String name;
  int crew;
  String destructor;

    Starship(String name, int crew, String destination) {
        this.name = name;
        this.crew = crew;
      
        this.destination = destination;
    }

    public String toString() {
        return name + " | Crew: " + crew + " | Destination: " + destination;
    }
}

public class SpaceMission {
    public static void main(String[] args) {

        LinkedList<Starship> fleet = new LinkedList<>();

        fleet.add(new Starship("Starship-1", 20, "Mars"));
        fleet.add(new Starship("Starship-2", 15, "Moon"));
        fleet.add(new Starship("Starship-3", 30, "Europa"));

        System.out.println(fleet);
    }
}
