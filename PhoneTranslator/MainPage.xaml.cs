namespace PhoneTranslator
{
    public partial class MainPage : ContentPage
    {

        public MainPage()
        {
            InitializeComponent();
        }

        string translatedNumber;
        private void OnTranslate(object sender, EventArgs e)
        {
            string enteredNumber = PhoneNumberText.Text;
            translatedNumber = CoreAnimation.PhonewordTranslator.ToNumber(enteredNumber);
        }

    }
}
