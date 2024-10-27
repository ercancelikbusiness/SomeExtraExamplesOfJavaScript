//JS de tam olarak Java'daki gibi sınıf kavramı yok ama bi yeni klasörü sınıf gibi kullanacağız
//mesela Java'da bir sınıfta  private int sayi diye başlardık  burda prototype kullanacağız
//ayrıca burdan önce  ilk JavaScript repository'mdeki map, reduce, filter konusuna bakman iyi olur.

class Customer{
    constructor(id, customerNumber){
        // *** aşağıda prototyping örneğinden sonra buraya gel çok güzel birşey anlatıcam
        //şuan aşağıda yaptıgımızda aslında bir prototyping örneğidir çünkü this Customer sınıfının bir nesnesidir
        //bu yani bu sınıfın  örneğini temsil ediyor ve ona  this.id diyerek bir id değişkeni yaratıyorsun
        //içinede paremetreye gelen değeri atıyorsun olayı bu açıdan bakabilirsin..!! bunları yapmazsan bu sınıfın
        //örneğini çağırıp birşey yapamazsın mesela customer.id yi okuyamazsın zaten artık okunabilir.
        this.id = id;
        this.customerNumber = customerNumber;
    }
}

 let customer= new Customer(1,"12345"); // customer nesnesinde Customer sınıfının örneği var cons'daki paremetreleri tutuyor
 //aşağıda prototyping örneği
 customer.name="ercan" // customer cons'daki paremetreleri tutuyor ama paremetrede olmayan bir şeyi geçtik yinede kabul etti
 // bu olaya prototyping deniyor. 

 Customer.bisey="biseyy" // class'a bile prototyping yapılıyor

 class IndividualCustomer extends Customer{ // extends'ledik yani ındvidualCustomer. dedikten sonra Customerdekileride okur

    constructor(firstName,id,customerNumber){
        super(id,customerNumber) // bu veriler ortak olduğu için base'ye yolladık orda setlenecek
                                 // burda setlemeye gerek yok cunku  extends yaptığımız için ındıvıdualCustomer. dedikten
                                 // sonra firstName gibi baseler  cıkıbilecek cunku bu sınıf base'nin genişletilmesi
        this.firstName=firstName
    }
 }
 

 class CorporateCustomer extends Customer{
    
        constructor(companyName,id,customerNumber){
            super(id,customerNumber)
            this.companyName=companyName
        }
 }

 












