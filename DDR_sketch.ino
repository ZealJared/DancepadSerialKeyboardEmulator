class Button {
  public:
    int pin;
    char on, off;
    bool pressed;
    Button(int pin, char on, char off){
      this->pin = pin;
      pinMode(this->pin, INPUT_PULLUP);
      this->pressed = false;
      this->on = on;
      this->off = off;
    }
    void toggle(){
      if(digitalRead(this->pin) == LOW){
        if(!this->pressed){
          this->pressed = true;
          Serial.println(this->on);
        }
      } else if (digitalRead(this->pin) == HIGH){
        if(this->pressed){
          this->pressed = false;
          Serial.println(this->off);
        }
      }
    }
};


Button X(7, '1', '2');
Button U(8, '3', '4');
Button O(6, '5', '6');
Button L(4, '7', '8');
Button D(5, '9', '0');
Button R(3, 'A', 'B');

void setup() {
  Serial.begin(9600);
}

void loop() {
  X.toggle();
  U.toggle();
  O.toggle();
  L.toggle();
  D.toggle();
  R.toggle();
}
