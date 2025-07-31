package com.example.javaBasics;

import java.io.*;

public class StreamTypes {
    public static void main(String[] args) {
        String text = "Hello, this is a file stream demo in Java.";

        // 1. Byte Stream: Write using FileOutputStream
        try (FileOutputStream fos = new FileOutputStream("bytefile.txt")) {
            fos.write(text.getBytes());
            System.out.println("Written to bytefile.txt using FileOutputStream");
        } catch (IOException e) {
            e.printStackTrace();
        }

        // 2. Byte Stream: Read using FileInputStream
        try (FileInputStream fis = new FileInputStream("bytefile.txt")) {
            int ch;
            System.out.print("Read from bytefile.txt: ");
            while ((ch = fis.read()) != -1) {
                System.out.print((char) ch);
            }
            System.out.println();
        } catch (IOException e) {
            e.printStackTrace();
        }

        // 3. Character Stream: Write using FileWriter
        try (FileWriter writer = new FileWriter("charfile.txt")) {
            writer.write(text);
            System.out.println("Written to charfile.txt using FileWriter");
        } catch (IOException e) {
            e.printStackTrace();
        }

        // 4. Character Stream: Read using FileReader
        try (FileReader reader = new FileReader("charfile.txt")) {
            int ch;
            System.out.print("Read from charfile.txt: ");
            while ((ch = reader.read()) != -1) {
                System.out.print((char) ch);
            }
            System.out.println();
        } catch (IOException e) {
            e.printStackTrace();
        }

        // 5. Buffered Streams: Efficient reading/writing
        try (BufferedWriter bw = new BufferedWriter(new FileWriter("buffered.txt"));
             BufferedReader br = new BufferedReader(new FileReader("buffered.txt"))) {
            bw.write("Buffered Writer example.");
            bw.newLine();
            bw.write("Second line.");
            bw.flush();
            System.out.println("Written to buffered.txt using BufferedWriter");

            System.out.println("Read from buffered.txt using BufferedReader:");
            String line;
            while ((line = br.readLine()) != null) {
                System.out.println(line);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}