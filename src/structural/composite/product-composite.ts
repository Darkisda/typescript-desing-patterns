export abstract class ProductComponent {
  abstract getPrice(): number

  add(product: ProductComponent): void {}
  remove(product: ProductComponent): void {}
}

export class ProductLeaf extends ProductComponent {
  constructor(public name: string, private price: number ) {
    super()
  }

  getPrice(): number {
    return this.price
  }
}

export class ProductComposite extends ProductComponent {
  private children: ProductComponent[] = []

  add(product: ProductComponent): void {
    this.children.push(product)
  }

  remove(product: ProductComponent): void {
    this.children.splice(this.children.indexOf(product), 1)
  }

  getPrice(): number {
    return this.children.reduce((sum, child) => sum + child.getPrice(), 0)
  }
}

//Client code

const pen = new ProductLeaf('Caneta', 1)
const smartphone = new ProductLeaf('Moto G', 600)

const productBox = new ProductComposite()
productBox.add(pen)
productBox.add(smartphone)

const tablet = new ProductLeaf('LeNovo', 2_000)
const kindle = new ProductLeaf('Kindle', 1_500)

const anotherBox = new ProductComposite()
anotherBox.add(tablet)
anotherBox.add(kindle)

productBox.add(anotherBox)

console.log(productBox.getPrice())