class Bank {
    double getInterestRate() {
        return 5.0;
    }
}

class SBI extends Bank {
    @Override
    double getInterestRate() {
        return 6.5;
    }
}

class ICICI extends Bank {
    @Override
    double getInterestRate() {
        return 7.0;
    }
}

public class Overd {
    public static void main(String[] args) {
        Bank bank1 = new SBI();
        Bank bank2 = new ICICI();
        System.out.println("SBI Interest: " + bank1.getInterestRate());
        System.out.println("ICICI Interest: " + bank2.getInterestRate());
    }
}
