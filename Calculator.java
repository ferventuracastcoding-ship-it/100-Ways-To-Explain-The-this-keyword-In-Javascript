import java.util.Scanner;

public class ConsoleCalculator {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        boolean running = true;

        while (running) {
            System.out.println("\n--- Java Calculator ---");
            System.out.println("1. Add");
            System.out.println("2. Subtract");
            System.out.println("3. Multiply");
            System.out.println("4. Divide");
            System.out.println("5. Exit");
            System.out.print("Choose option: ");

            int choice = sc.nextInt();

            if (choice == 5) {
                running = false;
                break;
            }

            System.out.print("Enter first number: ");
            double a = sc.nextDouble();

            System.out.print("Enter second number: ");
            double b = sc.nextDouble();

            switch (choice) {
                case 1 -> System.out.println("Result = " + (a + b));
                case 2 -> System.out.println("Result = " + (a - b));
                case 3 -> System.out.println("Result = " + (a * b));
                case 4 -> {
                    if (b == 0) {
                        System.out.println("Cannot divide by zero!");
                    } else {
                        System.out.println("Result = " + (a / b));
                    }
                }
                default -> System.out.println("Invalid option");
            }
        }
        sc.close();
    }
}
