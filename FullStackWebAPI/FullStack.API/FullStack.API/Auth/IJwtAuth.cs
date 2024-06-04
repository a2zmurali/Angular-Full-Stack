namespace FullStack.API.Auth
{
    public interface IJwtAuth
    {
        string Authentication(string username, string password);
    }
}
