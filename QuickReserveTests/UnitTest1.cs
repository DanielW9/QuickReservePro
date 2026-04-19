using Xunit;
using QuickReserveServer.Models;

namespace QuickReserveTests
{
    public class UnitTest1
    {
        [Fact]
        public void NewTask_ShouldNotBeCompleted()
        {
            
            var task = new CloudTask();

            
            task.Name = "Przetestować bezpiecznik";

            
            Assert.False(task.IsCompleted, "Nowo utworzone zadanie powinno mieć status IsCompleted = false.");
        }
    }
}