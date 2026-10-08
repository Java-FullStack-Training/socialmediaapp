@Entity
@Table(name = "user")
public class UserEntity {
    @Id
    @GeneratedValue
    private String name;
    private String password;
}
