using System;
namespace NETCore_Angular_AwesomeApps.Service.CareerCloud.BusinessLogicLayer
{
    public class ValidationException : Exception
    {
        public ValidationException(int code, string message)
        {
            Code = code;
        }

        public int Code { get; set; }
    }
}
