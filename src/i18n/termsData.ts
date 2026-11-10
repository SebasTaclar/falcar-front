export type TermsSection = {
  title: string
  paragraphs: string[]
  bullets?: string[]
}

export type TermsPageData = {
  intro: string
  sections: TermsSection[]
  outro: string
  contactTitle: string
  contactSubtitle: string
  pickupTitle: string
}

export const termsEs: TermsPageData = {
  intro: 'Queremos que tu experiencia con FALCAR GROUP S.A.S. sea fácil, clara y segura. Al realizar una compra en nuestra tienda aceptas las siguientes condiciones:',
  sections: [
    {
      title: '1. Productos y tallas',
      paragraphs: [
        'Antes de comprar, revisa la descripción del producto y nuestra guía de tallas.',
        'Los colores pueden presentar pequeñas variaciones según la pantalla o iluminación de las fotografías.'
      ]
    },
    {
      title: '2. Pagos',
      paragraphs: [
        'Todos los precios están expresados en pesos colombianos (COP).',
        'Tu pedido quedará confirmado una vez el pago sea aprobado por el medio de pago seleccionado.'
      ]
    },
    {
      title: '3. Envíos',
      paragraphs: [
        'Realizamos envíos a los destinos habilitados en nuestra tienda.',
        'El costo y tiempo estimado de entrega serán informados durante el proceso de compra.',
        'Los tiempos pueden variar por novedades de la transportadora o situaciones externas.'
      ]
    },
    {
      title: '4. Cambios',
      paragraphs: [
        'Puedes solicitar un cambio de talla o referencia dentro de los 15 días calendario siguientes a la entrega.',
        'El producto debe estar sin usar, con sus empaques o etiquetas originales y en perfecto estado.',
        'Los cambios están sujetos a disponibilidad.',
        'Si el cambio es por talla, color o referencia, el costo del transporte será asumido por el cliente.',
        'Si FALCAR GROUP S.A.S. cometió un error en el pedido, nosotros asumiremos el costo correspondiente.'
      ]
    },
    {
      title: '5. Derecho de retracto',
      paragraphs: [
        'En las compras realizadas por nuestra tienda virtual podrás ejercer el derecho de retracto dentro de los 5 días hábiles siguientes a la entrega, cuando legalmente corresponda y de acuerdo con las condiciones establecidas por la legislación colombiana.'
      ]
    },
    {
      title: '6. Garantía',
      paragraphs: [
        'Si tu producto presenta un posible defecto de fabricación, confección o material, comunícate con nosotros con tu número de pedido, descripción de la novedad y fotografías.',
        'Revisaremos el caso conforme a la garantía legal aplicable.'
      ]
    },
    {
      title: '7. Cuidado de los productos',
      paragraphs: [
        'Sigue siempre las instrucciones de cuidado de la etiqueta.',
        'Para productos usados en playa o piscina, recomendamos retirar residuos de cloro, sal, arena y bloqueador para ayudar a conservarlos.'
      ]
    }
  ],
  outro: 'FALCAR GROUP S.A.S. ✨\nConstruimos oportunidades de su mano.',
  contactTitle: '¿Necesitas ayuda?',
  contactSubtitle: 'Puedes comunicarte con FALCAR GROUP S.A.S. a través de nuestros canales oficiales. Estaremos felices de acompañarte antes, durante y después de tu compra.',
  pickupTitle: 'Recoger en tienda'
}

export const termsEn: TermsPageData = {
  intro: 'We want your experience with FALCAR GROUP S.A.S. to be easy, clear, and secure. By making a purchase in our store, you accept the following conditions:',
  sections: [
    {
      title: '1. Products and sizes',
      paragraphs: [
        'Before purchasing, check the product description and our size guide.',
        'Colors may have slight variations depending on the screen or lighting in the photographs.'
      ]
    },
    {
      title: '2. Payments',
      paragraphs: [
        'All prices are expressed in Colombian pesos (COP).',
        'Your order will be confirmed once the payment is approved by the selected payment method.'
      ]
    },
    {
      title: '3. Shipping',
      paragraphs: [
        'We ship to destinations enabled in our store.',
        'The shipping cost and estimated delivery time will be provided during the checkout process.',
        'Times may vary due to carrier updates or external circumstances.'
      ]
    },
    {
      title: '4. Exchanges',
      paragraphs: [
        'You may request a size or reference exchange within 15 calendar days following delivery.',
        'The product must be unused, with its original packaging or tags, and in perfect condition.',
        'Exchanges are subject to availability.',
        'If the exchange is for size, color, or reference, the shipping cost will be covered by the customer.',
        'If FALCAR GROUP S.A.S. made an error in the order, we will cover the corresponding cost.'
      ]
    },
    {
      title: '5. Right of withdrawal',
      paragraphs: [
        'For purchases made through our online store, you may exercise the right of withdrawal within 5 business days following delivery, when legally applicable and in accordance with the conditions established by Colombian legislation.'
      ]
    },
    {
      title: '6. Warranty',
      paragraphs: [
        'If your product presents a possible manufacturing, assembly, or material defect, contact us with your order number, description of the issue, and photographs.',
        'We will review the case in accordance with the applicable legal warranty.'
      ]
    },
    {
      title: '7. Product care',
      paragraphs: [
        'Always follow the care instructions on the label.',
        'For products used at the beach or pool, we recommend removing chlorine, salt, sand, and sunscreen residues to help preserve them.'
      ]
    }
  ],
  outro: 'FALCAR GROUP S.A.S. ✨\nBuilding opportunities together.',
  contactTitle: 'Need help?',
  contactSubtitle: 'You can contact FALCAR GROUP S.A.S. through our official channels. We will be happy to assist you before, during, and after your purchase.',
  pickupTitle: 'Store pickup'
}
