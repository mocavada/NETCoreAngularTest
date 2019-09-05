using System;
using System.Collections.Generic;
using NETCore_Angular_AwesomeApps.Models.CareerCloud.Poco;

namespace NETCore_Angular_AwesomeApps.Service.CareerCloud.BusinessLogicLayer
{
    public class ApplicantProfileLogic : BaseLogic<ApplicantProfilePoco>
    {
        public ApplicantProfileLogic(IDataRepository<ApplicantProfilePoco> repository) : base(repository) 
        {
        }

        protected override void Verify(ApplicantProfilePoco[] pocos)
        {
            List<ValidationException> exceptions = new List<ValidationException>();
            base.Verify(pocos);

            foreach(var poco in pocos)
            {
                if(poco.CurrentSalary < 0)
                {
                    exceptions.Add(new ValidationException(11, $"Current Salary Cannot Negative"));
                }
                if (poco.CurrentRate < 0)
                {
                    exceptions.Add(new ValidationException(112, $"Current Salary Cannot Negative"));
                }
            }

            if (exceptions.Count > 0)
            {
                throw new AggregateException(exceptions);
            }
        }

        public override void Add(ApplicantProfilePoco[] pocos)
        {
            Verify(pocos);
            base.Add(pocos);
        }

        public override void Update(ApplicantProfilePoco[] pocos)
        {
            Verify(pocos);
            base.Update(pocos);
        }
    }
}
