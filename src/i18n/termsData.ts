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
      title: '1. Productos',
      paragraphs: [
        'Antes de comprar, revisa la descripción del producto, su contenido y la edad recomendada de uso.',
        'Los colores y acabados pueden presentar pequeñas variaciones según la pantalla o la iluminación de las fotografías.'
      ]
    },
    {
      title: '2. Pagos',
      paragraphs: [
        'Todos los precios están expresados en pesos colombianos (COP).',
        'Los pagos se procesan de forma segura a través de Wompi, con PSE, tarjeta, Nequi u otros medios disponibles.',
        'Tu pedido quedará confirmado una vez el pago sea aprobado por el medio de pago seleccionado.'
      ]
    },
    {
      title: '3. Envíos',
      paragraphs: [
        'Realizamos envíos a los destinos habilitados en nuestra tienda.',
        'El costo y tiempo estimado de entrega serán informados durante el proceso de compra.',
        'Después de tu compra, un asesor de FALCAR GROUP se pondrá en contacto contigo para cuadrar el envío y la entrega de tu pedido.',
        'Los tiempos pueden variar por novedades de la transportadora o situaciones externas.'
      ]
    },
    {
      title: '4. Cambios',
      paragraphs: [
        'Puedes solicitar un cambio de referencia dentro de los 15 días calendario siguientes a la entrega.',
        'El producto debe estar sin usar, con sus empaques y etiquetas originales y en perfecto estado.',
        'Los cambios están sujetos a disponibilidad.',
        'Si el cambio no se debe a un defecto del producto, el costo del transporte será asumido por el cliente.',
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
        'Si tu producto presenta un posible defecto de fabricación o material, comunícate con nosotros con tu número de pedido, descripción de la novedad y fotografías.',
        'Revisaremos el caso conforme a la garantía legal aplicable.'
      ]
    },
    {
      title: '7. Uso y cuidado de los productos',
      paragraphs: [
        'Sigue siempre las instrucciones de uso y limpieza indicadas en el empaque del producto.',
        'Los juguetes deben utilizarse de acuerdo con la edad recomendada indicada en la etiqueta y, cuando aplique, bajo supervisión de un adulto.',
        'Verifica el estado del producto antes de cada uso para garantizar la seguridad de los pequeños.'
      ]
    }
  ],
  outro: 'FALCAR GROUP S.A.S. ✨\nConstruimos oportunidades de su mano.',
  contactTitle: '¿Necesitas ayuda?',
  contactSubtitle: 'Puedes comunicarte con FALCAR GROUP S.A.S. a través de nuestro canal oficial de WhatsApp. Estaremos felices de acompañarte antes, durante y después de tu compra.',
  pickupTitle: 'Recoger en tienda'
}

export const termsEn: TermsPageData = {
  intro: 'We want your experience with FALCAR GROUP S.A.S. to be easy, clear, and secure. By making a purchase in our store, you accept the following conditions:',
  sections: [
    {
      title: '1. Products',
      paragraphs: [
        'Before purchasing, check the product description, its contents, and the recommended age of use.',
        'Colors and finishes may have slight variations depending on the screen or lighting in the photographs.'
      ]
    },
    {
      title: '2. Payments',
      paragraphs: [
        'All prices are expressed in Colombian pesos (COP).',
        'Payments are securely processed through Wompi, using PSE, card, Nequi, or other available methods.',
        'Your order will be confirmed once the payment is approved by the selected payment method.'
      ]
    },
    {
      title: '3. Shipping',
      paragraphs: [
        'We ship to destinations enabled in our store.',
        'The shipping cost and estimated delivery time will be provided during the checkout process.',
        'After your purchase, a FALCAR GROUP advisor will contact you to arrange the shipping and delivery of your order.',
        'Times may vary due to carrier updates or external circumstances.'
      ]
    },
    {
      title: '4. Exchanges',
      paragraphs: [
        'You may request a reference exchange within 15 calendar days following delivery.',
        'The product must be unused, with its original packaging and tags, and in perfect condition.',
        'Exchanges are subject to availability.',
        'If the exchange is not due to a product defect, the shipping cost will be covered by the customer.',
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
        'If your product presents a possible manufacturing or material defect, contact us with your order number, description of the issue, and photographs.',
        'We will review the case in accordance with the applicable legal warranty.'
      ]
    },
    {
      title: '7. Product use and care',
      paragraphs: [
        'Always follow the use and cleaning instructions indicated on the product packaging.',
        'Toys must be used according to the recommended age indicated on the label and, when applicable, under adult supervision.',
        'Check the condition of the product before each use to ensure the safety of the little ones.'
      ]
    }
  ],
  outro: 'FALCAR GROUP S.A.S. ✨\nBuilding opportunities together.',
  contactTitle: 'Need help?',
  contactSubtitle: 'You can contact FALCAR GROUP S.A.S. through our official WhatsApp channel. We will be happy to assist you before, during, and after your purchase.',
  pickupTitle: 'Store pickup'
}
