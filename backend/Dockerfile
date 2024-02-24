FROM eclipse-temurin:21-alpine

WORKDIR /app

COPY . .
RUN ./mvnw install -DskipTests

EXPOSE 8080

CMD ["java", "-jar", "target/m347.backend-0.0.1-SNAPSHOT.jar"]